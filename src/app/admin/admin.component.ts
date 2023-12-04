import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { Event } from '../events/events.model';
import { EventsService } from '../events/events.service';
import { UserService } from './user.service';
import { UserData } from '../login/userdata.model';
import { Picture } from '../pictures/pictures.model';
import { PicturesService } from '../pictures/pictures.service';
import { Router } from '@angular/router';
import { Question } from '../faq/faq.model';
import { FaqService } from '../faq/faq.service';
import { Editor, Toolbar, Validators, toDoc } from 'ngx-editor';
import { ContactService } from '../contacts/contacts.service';
import { ImageService } from '../picturePage/image.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {

  minDate: Date = new Date();
  public eventData: Event[] = [];
  private originalEventData: Event[] = [];
  public pictureData: Picture[] = [];
  private originalPictureData: Picture[] = [];
  private idxUpload: number = -1;
  private pictureIdClicked: number = -1;
  displayedColumns: string[] = ['firstName', 'lastName', 'userName', 'delete'];
  public userData: UserData[] = [];
  public displayAddNewUser: boolean = false;
  public newUser: UserData = new UserData();
  public passwordErrorStr: string = '';
  public passwordError: boolean = false;
  public faqs: Question[] = [];
  private originalFaqs: Question[] = [];
  public editor: Editor = new Editor();
  public contactEditor: Editor = new Editor();
  public contactInfo: string = '';
  public imageInfo: string = '';

  @ViewChild('imageSelect') imageInputRef!: ElementRef;
  @ViewChild('userTable') userTableRef!: MatTable<any>;

  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  constructor(private eventSvc: EventsService, private pictureSvc: PicturesService, private userSvc: UserService,
    private titleService: Title, private router: Router, private faqSvc: FaqService, private contactSvc: ContactService,
    private imageSvc: ImageService) {
    this.editor = new Editor({
      history: true
    });

    this.contactEditor = new Editor({
      history: true
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle("Country Creek - Admin");

    this.getEvents();
    this.getPictures();
    this.getUsers();
    this.getQuestions();
    this.getContactInfo();
    this.getImages();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  private getEvents() {
    this.eventSvc.getEvents().subscribe(resp => {
      this.eventData = [];
      resp.forEach(event => {
        var newEvent = new Event();
        // var tempDate = new Date(event.Date);
        // var userTimezone = tempDate.getTimezoneOffset() * 60000;
        // newEvent.date = new Date(tempDate.getTime() - userTimezone);
        newEvent.date = new Date(event.Date);
        newEvent.description = event.Description;
        newEvent.title = event.Title;
        newEvent.id = event.Id;
        this.eventData.push(newEvent);
      });

      this.originalEventData = JSON.parse(JSON.stringify(this.eventData));
    })
  }

  public saveEvents() {
    var updateEvents: Event[] = [];

    this.originalEventData.forEach((event, idx) => {
      if ((event != this.eventData[idx]) && (this.eventData[idx].id != 0)) {
        //Update Data
        if ((this.eventData[idx].title != '') || (this.eventData[idx].description != '')) {
          updateEvents.push({ ...this.eventData[idx] });
        }
      }
    });

    this.eventData.forEach((event, idx) => {
      if (event.id == 0) {
        //Save new data
        if ((this.eventData[idx].title != '') || (this.eventData[idx].description != '')) {
          updateEvents.push({ ...event });
        }
      }
    })

    if (updateEvents.length > 0) {
      this.eventSvc.saveEvents(updateEvents).subscribe(resp => {
        this.getEvents();
      });
    }
  }

  public addEvent() {
    var newEvent = new Event();
    this.eventData.push(newEvent);
  }

  public deleteEvent(id: Number) {
    this.eventSvc.deleteEvent(id).subscribe(resp => {
      this.getEvents();
    })
  }

  public isAddDisabled() {
    var event = this.eventData.find(x => x.id === 0);
    if (event) {
      return event.title == '' && event.description == '';
    }

    return false;
  }

  public updateEventTime(id: Number, newDate: Date) {
    var idx = this.eventData.findIndex(x => x.id == id);
    if (idx >= 0) {
      this.eventData[idx].date.setTime(newDate.getTime());
    }
  }

  //Pictures
  private getPictures() {
    this.pictureSvc.getPictures().subscribe(resp => {
      this.pictureData = [];
      resp.forEach(pic => {
        var newPic: Picture = new Picture();
        newPic.id = pic.Id;
        newPic.description = pic.Description;
        newPic.image = pic.Image;
        this.pictureData.push(newPic);
      })
      this.originalPictureData = JSON.parse(JSON.stringify(this.pictureData));
    })
  }

  public addPicture() {
    var data: Picture = new Picture();
    this.pictureData.push(data);
  }

  public savePictures() {
    var newData: Picture[] = [];
    this.originalPictureData.forEach((picture, idx) => {
      if (picture != this.pictureData[idx]) {
        newData.push({ ...this.pictureData[idx] });
      }
    });

    this.pictureData.forEach((picture, idx) => {
      if (picture.id == 0) {
        newData.push({ ...picture });
      }
    })

    this.pictureSvc.savePictures(newData).subscribe(resp => {
      this.getPictures();
    })
  }

  public deletePicture(id: number) {
    this.pictureSvc.deletePicture(id).subscribe(resp => {
      this.getPictures();
    })
  }

  onImageClicked(id: number) {
    this.pictureIdClicked = id;
    this.imageInputRef.nativeElement.click();
  }

  onFileChanged(event: any, id: Number) {
    var idx = this.pictureData.findIndex(x => x.id == this.pictureIdClicked);
    if (idx >= 0) {
      var file = event.target.files[0];
      var pattern = /image-*/;
      var reader = new FileReader();
      if (!file.type.match(pattern)) {
        alert('invalid file');
        return;
      }
      this.idxUpload = idx;
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsDataURL(file);
    }

    this.pictureIdClicked = -1;
  }

  handleReaderLoaded(e: any) {
    let reader = e.target;
    if (this.idxUpload >= 0) {
      this.pictureData[this.idxUpload].image = reader.result;
      this.idxUpload = -1;
    }
  }

  isAddPictureDisabled() {
    var pic = this.pictureData.find(x => x.id == 0);
    if (pic) {
      return pic.image == '';
    }

    return false;
  }

  //User data
  getUsers() {
    this.userSvc.getUsers().subscribe(resp => {
      this.userData = [];
      resp.forEach(user => {
        var newUser: UserData = new UserData();
        newUser.firstName = user.FirstName;
        newUser.lastName = user.LastName;
        newUser.id = user.Id;
        newUser.userName = user.UserName;
        this.userData.push(newUser);
      })

      this.userTableRef?.renderRows();
    })
  }

  deleteUser(id: number) {
    this.userSvc.deleteUser(id).subscribe(resp => {
      this.getUsers();
    })
  }

  addUserClicked() {
    this.displayAddNewUser = true;
  }

  isAddUserDisabled(): boolean {
    return this.displayAddNewUser;
  }

  saveNewUserClicked() {
    if (this.validatePassword()) {
      var tempUser: UserData = new UserData();

      tempUser.password = btoa(this.newUser.password);
      tempUser.userName = btoa(this.newUser.userName);
      tempUser.firstName = this.newUser.firstName;
      tempUser.lastName = this.newUser.lastName;

      this.userSvc.newUser(tempUser).subscribe(resp => {
        this.newUser = new UserData();
        this.displayAddNewUser = false;
        this.getUsers();
      }, (err) => {
        if (err.status == 401) {
          alert("User name already exists");
        }
      })
    }
  }

  validatePassword(): boolean {
    this.passwordErrorStr = '';

    var regStatement = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    var matches = this.newUser.password.match(regStatement);
    if (!matches) {
      this.passwordErrorStr = 'Password must be minimum eight characters, at least one letter, one number and one special character';
      this.passwordError = true;
      return false;
    }

    if (this.newUser.userName.length < 5) {
      this.passwordErrorStr = 'User name must be 5 or more characters';
      this.passwordError = true;
      return false;
    }

    if (this.newUser.firstName.length == 0) {
      this.passwordErrorStr = 'Must provide a first name';
      this.passwordError = true;
      return false;
    }

    if (this.newUser.lastName.length == 0) {
      this.passwordErrorStr = 'Must provide a last name';
      this.passwordError = true;
      return false;
    }

    this.passwordError = false;
    return true;
  }

  logout() {
    sessionStorage.removeItem('ccLoginToken');
    this.router.navigate(['']);
  }

  getQuestions() {
    this.faqSvc.getFaqs().subscribe(resp => {
      this.faqs = [];
      resp.forEach(faq => {
        var newQuestion = new Question();
        newQuestion.question = faq.Question;
        newQuestion.answer = faq.Answer;
        newQuestion.id = faq.Id;
        this.faqs.push(newQuestion);
      });

      this.originalFaqs = JSON.parse(JSON.stringify(this.faqs));
    })
  }

  addQuestion() {
    var faq = new Question();
    this.faqs.push(faq);

  }

  saveQuestion() {
    var updateFaq: Question[] = [];

    this.originalFaqs.forEach((question, idx) => {
      if ((question != this.faqs[idx]) && (this.faqs[idx].id != 0)) {
        //Update Data
        if ((this.faqs[idx].question != '') || (this.faqs[idx].answer != '')) {
          updateFaq.push({ ...this.faqs[idx] });
        }
      }
    });

    this.faqs.forEach((faq, idx) => {
      if (faq.id == 0) {
        //Save new data
        if ((this.faqs[idx].question != '') || (this.faqs[idx].answer != '')) {
          updateFaq.push({ ...faq });
        }
      }
    })

    if (updateFaq.length > 0) {
      this.faqSvc.saveFaqs(updateFaq).subscribe(resp => {
        this.getQuestions();
      });
    }
  }

  deleteQuestion(id: number) {
    this.faqSvc.deleteFaq(id).subscribe(resp => {
      this.getQuestions();
    })
  }

  getContactInfo() {
    this.contactSvc.getContactInfo().subscribe(resp => {
      this.contactInfo = resp;
    })
  }

  saveContactInfo() {
    this.contactSvc.saveContactInfo(this.contactInfo).subscribe(resp => {
      this.getContactInfo();
    })
  }

  getImages() {
    this.imageSvc.getPictures().subscribe(resp => {
      this.imageInfo = resp;
    })
  }

  saveImages() {
    this.imageSvc.savePictures(this.imageInfo).subscribe(resp => {
      this.getImages();
    })
  }
}

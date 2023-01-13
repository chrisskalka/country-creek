import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Event } from '../events/events.model';
import { EventsService } from '../events/events.service';
import { Picture } from '../pictures/pictures.model';
import { PicturesService } from '../pictures/pictures.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  minDate: Date = new Date();
  public eventData: Event[] = [];
  private originalEventData: Event[] = [];
  public pictureData: Picture[] = [];
  private originalPictureData: Picture[] = [];
  private idxUpload: number = -1;
  private pictureIdClicked: number = -1;

  @ViewChild('imageSelect') imageInputRef!: ElementRef;
  
  constructor(private eventSvc: EventsService, private pictureSvc: PicturesService) { }

  ngOnInit(): void {
    this.getEvents();
    this.getPictures();
  }

  private getEvents() {
    this.eventSvc.getEvents().subscribe(resp => {
      this.eventData = [];
      resp.forEach(event => {
        var newEvent = new Event();
        var tempDate = new Date(event.date);
        var userTimezone = tempDate.getTimezoneOffset() * 60000;
        newEvent.date = new Date(tempDate.getTime() - userTimezone);
        newEvent.description = event.description;
        newEvent.title = event.title;
        newEvent.id = event.id;
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
      this.pictureData = resp;
      this.originalPictureData = JSON.parse(JSON.stringify(this.pictureData));
    })
  }

  public addPicture() {
    var data: Picture = new Picture();
    this.pictureData.push(data);
  }

  public savePictures() {
    var newData: Picture[] = [];
    this.originalPictureData.forEach((picture, idx) =>{
      if(picture != this.pictureData[idx]){
        newData.push({...this.pictureData[idx]});
      }
    });

    this.pictureData.forEach((picture, idx) => {
      if(picture.id == 0){
        newData.push({...picture});
      }
    })

    this.pictureSvc.savePictures(newData).subscribe(resp => {
      this.getPictures();
    })
  }

  public deletePicture(id: number){
    this.pictureSvc.deletePicture(id).subscribe(resp =>{
      this.getPictures();
    })
  }

  onImageClicked(id: number){
    this.pictureIdClicked = id;
    this.imageInputRef.nativeElement.click();
  }

  onFileChanged(event: any, id: Number) {
    var idx = this.pictureData.findIndex(x => x.id == this.pictureIdClicked);
    if (idx >= 0) {
      var file = event.target.files[0];
      var pattern = /image-*/;
      var reader = new FileReader();
      if(!file.type.match(pattern)){
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

  isAddPictureDisabled(){
    var pic = this.pictureData.find(x => x.id == 0);
    if(pic){
      return pic.image == '';
    }

    return false;
  }
}

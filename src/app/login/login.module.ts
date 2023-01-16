import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginRoutingModule } from './login.route';
import { LoginComponent } from './login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        FlexLayoutModule,
        LoginRoutingModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule
    ],
    exports: [
        LoginComponent
    ],
    providers: [LoginService],
    bootstrap: []
})
export class LoginModule { }

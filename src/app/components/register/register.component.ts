import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(public sanitizer: DomSanitizer) {}

  users: User[] = [];
  userPhoto: string | undefined | null;
  url: string | ArrayBuffer | null | undefined;

  userRegistration = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    categories: new FormControl(''),
    cv: new FormControl(''),
    photo: new FormControl(''),
  });

  onFileChanged(event: any) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.url = reader.result;
      };
    }
  }

  onSubmit() {
    const formData = this.userRegistration.value;
    const newUser: User = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      categories: formData.categories,
      cv: formData.cv,
      photo: formData.photo,
    };

    this.users.push(newUser);
    this.userRegistration.reset();
    console.log(this.users);
  }
}

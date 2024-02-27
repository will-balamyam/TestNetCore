import { Component, OnInit  } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { take } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import {SessionService} from "../shared/Services/session.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  formLogin: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });
  showAlertError: any = null;
  constructor(private sessionService: SessionService,
              private router: Router,) {
  }

  ngOnInit(): void {
  }

  doLogin(): void {
      this.showAlertError = null;
      const bodyJson = this.formLogin.value;
      this.sessionService.login(bodyJson).pipe(take(1)).subscribe({
          next: (response: any) => {
              if (response['code'] == 200) {
                this.sessionService.setUserData(response['data']);
                if (response['data']['rolId'] == 1) {
                  this.router.navigateByUrl(`/admin/tiendas`);
                } else {
                  this.router.navigateByUrl(`/catalogo-productos`);
                }
              } else {
                this.showAlertError = 'Credenciales incorrectas';
              }
          }
      });
  }
}

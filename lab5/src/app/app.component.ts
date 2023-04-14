import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lab5';
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      imie: new FormControl('', Validators.required),
      nazwisko: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      adres: new FormGroup({
        ulica: new FormControl('', Validators.required),
        numer: new FormControl('', Validators.required),
        kod: new FormControl('', Validators.required),
        miasto: new FormControl('', Validators.required),
      }),
      koszyk: new FormArray([
        new FormGroup({
          nazwa: new FormControl('', Validators.required),
          cena: new FormControl('', Validators.required),
          ilosc: new FormControl('', Validators.required),
        })
      ])
    });
  }
  get koszyk() {
    return this.form.get('koszyk') as FormArray;
  }
  addProduct() {
    const product = new FormGroup({
      nazwa: new FormControl('', Validators.required),
      cena: new FormControl('', Validators.required),
      ilosc: new FormControl('', Validators.required),
    })
    this.koszyk.push(product);
    console.log(this.koszyk.value);
  }
  submit() {
    console.log(this.form.value);
  }
}

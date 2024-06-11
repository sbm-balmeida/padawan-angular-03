import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Animais } from '../animais';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css']
})
export class ListaAnimaisComponent implements OnInit {

  animais!: Animais;

  constructor(
    private ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(param => {
      this.animais = this.ActivatedRoute.snapshot.data['animais'];
    });
  }
}

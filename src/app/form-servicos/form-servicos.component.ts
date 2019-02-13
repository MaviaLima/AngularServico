import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { FormServicosDataSource } from './form-servicos-datasource';
import { Servico } from '../models/servico';
import { ServicosService } from '../services/servicos.service';

@Component({
  selector: 'app-form-servicos',
  templateUrl: './form-servicos.component.html',
  styleUrls: ['./form-servicos.component.css']
})

export class FormServicosComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: FormServicosDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
 /* displayedColumns = ['id', 'categoria', 'descricao'];

  ngOnInit() {
    this.dataSource = new FormServicosDataSource(this.paginator, this.sort);
  }
*/
 /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
 displayedColumns = ['id','categoria', 'descricao'];

 private listaServico: Servico[];
 
 constructor(private servicosService:ServicosService) {}

 ngOnInit() {
    this.dataSource = new FormServicosDataSource(this.paginator, this.sort);
    this.listar();
   }

 listar(){
   
   this.servicosService.getListaServicos().subscribe(
     data => this.listaServico = data, err => console.log(err)
     );
   
 }





}

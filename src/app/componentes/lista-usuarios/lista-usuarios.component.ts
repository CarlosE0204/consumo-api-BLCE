import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UserService } from '../../services/user.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    MatPaginator,MatSort,
    MatTableModule,MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
 })
export class UserListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'nombre', 'email', 'rol'];
  dataSource = new MatTableDataSource<any>([]); // Inicializa con un arreglo vacío

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Llama al servicio para obtener los usuarios y asignarlos al dataSource
    this.userService.getUsers().subscribe((data: any[]) => {
      this.dataSource.data = data; // Asigna los datos obtenidos a dataSource
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-lista-usuarios',
//   standalone: true,
//   imports: [],
//   templateUrl: './lista-usuarios.component.html',
//   styleUrl: './lista-usuarios.component.css'
// })
// export class ListaUsuariosComponent {

// }

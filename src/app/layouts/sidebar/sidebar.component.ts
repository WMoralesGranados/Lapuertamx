import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  isCalculadorasOpen: boolean = false;
  isClosetsOpen: boolean = false;
  currentRoute: string = '';
  isFlorenciaClassicOpen: boolean = false;
  isFlorenciaPremiumOpen: boolean = false;
  isMilanOpen: boolean = false;


  constructor(private router: Router) {
    // Escuchar los cambios de ruta y actualizar la ruta actual
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  // Alternar visibilidad de Calculadoras
  toggleCalculadoras() {
    this.isCalculadorasOpen = !this.isCalculadorasOpen;
  }

  // Alternar visibilidad de Closets
  toggleClosets() {
    this.isClosetsOpen = !this.isClosetsOpen;
  }

  toggleFlorenciaClassic() {
    this.isFlorenciaClassicOpen = !this.isFlorenciaClassicOpen;
  }

  toggleFlorenciaPremium() {
    this.isFlorenciaPremiumOpen = !this.isFlorenciaPremiumOpen;
  }

  toggleMilan() {
    this.isMilanOpen = !this.isMilanOpen;
  }

  // Confirmar navegación antes de cambiar de componente
  navigateWithConfirmation(url: string) {
    // Si estamos en Home y navegamos a otra ruta, NO mostrar advertencia
    if (this.currentRoute === '/' && url !== '/') {
      this.router.navigate([url]); // Navega directamente si estás en Home
      return;
    }

    // Si estamos en una calculadora o en cualquier otra página, mostrar la advertencia
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Estás a punto de dejar la calculadora actual.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, cambiar',
      cancelButtonText: 'No, permanecer aquí',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate([url]); // Navega a la nueva ruta si se confirma
      }
    });
  }
}

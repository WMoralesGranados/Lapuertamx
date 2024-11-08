import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-closet-modal',
  templateUrl: './closet-modal.component.html',
})
export class ClosetModalComponent {
  @Output() close = new EventEmitter<void>();

  constructor(private router: Router) {}

  // Modificamos el método selectDesign para redirigir según el closet seleccionado
  selectDesign(design: string) {
    Swal.fire({
      title: `Has seleccionado el diseño: ${design}`,
      text: 'Por favor confirma',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      background: '#f7f9fc',
      backdrop: `
        rgba(0,0,123,0.4)
        url("/assets/images/nyan-cat.gif")
        left top
        no-repeat
      `
    }).then((result) => {
      if (result.isConfirmed) {
        // Usamos un switch para redirigir a la ruta correcta según el diseño seleccionado
        this.closeModal();
        console.log("Redirigiendo a: ", design);
        switch (design) {
          case 'Florencia Classic':
            this.router.navigate(['/calculators/closets/Florencia-Classic']);
            break;
          case 'Florencia Premium':
            this.router.navigate(['/calculators/closets/florencia-premium']);
            break;
          case 'FC 185 Perfil Gola':
            this.router.navigate(['/calculators/closets/fcpg185']);
            break;
          case 'Florencia Small':
            this.router.navigate(['/calculators/closets/florencia-classic-small']);
            break;
          case 'Florencia costado':
            this.router.navigate(['/calculators/closets/fc-cajonera-costado']);
            break;
          default:
            break;
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.closeModal();
      }
    });
  }

  // Cierra el modal al emitir el evento
  closeModal() {
    this.close.emit();
  }
}

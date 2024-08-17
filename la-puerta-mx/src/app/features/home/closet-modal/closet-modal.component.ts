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
        this.router.navigate(['/closets']);
        this.closeModal();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.closeModal();
      }
    });
  }

  closeModal() {
    this.close.emit();
  }
}

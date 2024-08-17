import { Component, ChangeDetectorRef } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-closets',
  templateUrl: './closets.component.html',
  styleUrls: ['./closets.component.css']
})
export class ClosetsComponent {
  entrepanerias: { ancho: number, alto: number, color: string, cantidad: number }[] = [];

  entrepanos: string[] = [
    'ENTREP. MELAMINA 30/60',
    'ENTREP. MELAMINA 30/80',
    'ENTREP. MELAMINA 30/120',
    'ENTREP. MELAMINA 30/160',
    'ENTREP. MELAMINA 30/185',
    'ENTREP. MELAMINA 30/194',
    'ENTREP. MELAMINA 30/240',
    'ENTREP. MELAMINA 40/60',
    'ENTREP. MELAMINA 40/80',
    'ENTREP. MELAMINA 40/120',
    'ENTREP. MELAMINA 40/160',
    'ENTREP. MELAMINA 40/185',
    'ENTREP. MELAMINA 40/194',
    'ENTREP. MELAMINA 40/240',
    'ENTREP. MELAMINA 60/60',
    'ENTREP. MELAMINA 60/80',
    'ENTREP. MELAMINA 60/120',
    'ENTREP. MELAMINA 60/160',
    'ENTREP. MELAMINA 60/185',
    'ENTREP. MELAMINA 60/194',
    'ENTREP. MELAMINA 60/240'
  ];

  // Lista de colores exteriores
  colores: { codigo: number, nombre: string }[] = [
    { codigo: 101, nombre: 'Aluminio AGL 16 mm' },
    { codigo: 102, nombre: 'Aluminio Soft AGL 16 mm' },
    { codigo: 103, nombre: 'Blanco AGL 12 mm' },
    { codigo: 104, nombre: 'Blanco AGL 16 mm' },
    { codigo: 105, nombre: 'Blanco MDF 12 mm' },
    { codigo: 106, nombre: 'Blanco MDF 15 mm' },
    { codigo: 144, nombre: 'Blanco Melamina 16 mm' },
    { codigo: 107, nombre: 'Brandy Oak AGL 16 mm' },
    { codigo: 108, nombre: 'Caledonian Oak AGL 16 mm' },
    { codigo: 109, nombre: 'Cambridge Walnut AGL 16 mm' },
    { codigo: 110, nombre: 'Durango AGL 16 mm' },
    { codigo: 111, nombre: 'Encino Polar AGL 16 mm' },
    { codigo: 112, nombre: 'Fresno Glacial  AGL 16 mm' },
    { codigo: 113, nombre: 'Greige Oak  AGL 16 mm' },
    { codigo: 114, nombre: 'Gris Gu  AGL 16 mm' },
    { codigo: 115, nombre: 'Gris Mate  AGL 16 mm' },
    { codigo: 116, nombre: 'Gris Oxford  AGL 16 mm' },
    { codigo: 117, nombre: 'Hickory Frida  AGL 16 mm' },
    { codigo: 118, nombre: 'Laricina  AGL 16 mm' },
    { codigo: 119, nombre: 'Lino Cancun  AGL 16 mm' },
    { codigo: 120, nombre: 'Natural Gray  AGL 16 mm' },
    { codigo: 121, nombre: 'Negro Mate  AGL 16 mm' },
    { codigo: 122, nombre: 'Nogal Abismo   AGL 16 mm' },
    { codigo: 123, nombre: 'Nogal Neo   AGL 16 mm' },
    { codigo: 124, nombre: 'Nogal Valentina   AGL 16 mm' },
    { codigo: 125, nombre: 'Olmo Ontario   AGL 16 mm' },
    { codigo: 126, nombre: 'Olmo Sabi   AGL 16 mm' },
    { codigo: 127, nombre: 'Olmo Volga  AGL 16 mm' },
    { codigo: 128, nombre: 'Precompuesto Ceniza  AGL 16 mm' },
    { codigo: 129, nombre: 'Rioja  AGL 16 mm' },
    { codigo: 130, nombre: 'Roble Colorado  AGL 16 mm' },
    { codigo: 131, nombre: 'Roble Azabache  AGL 16 mm' },
    { codigo: 132, nombre: 'Roble Eternity  AGL 16 mm' },
    { codigo: 133, nombre: 'Roble Merida  AGL 16 mm' },
    { codigo: 134, nombre: 'Roble Renovales  AGL 16 mm' },
    { codigo: 135, nombre: 'Roble Sinatra  AGL 16 mm' },
    { codigo: 136, nombre: 'Roble Trigo  AGL 16 mm' },
    { codigo: 137, nombre: 'Roble Santana  AGL 16 mm' },
    { codigo: 138, nombre: 'Roble Trufa  AGL 16 mm' },
    { codigo: 139, nombre: 'Stone Elm  AGL 16 mm' },
    { codigo: 140, nombre: 'Wengue  AGL 16 mm' },
    { codigo: 141, nombre: 'Nogal Terracota  AGL 16 mm' },
    { codigo: 142, nombre: 'Roble Provenzal  AGL 16 mm' },
    { codigo: 143, nombre: 'Gris Claro  AGL 16 mm' },
    { codigo: 144, nombre: 'Cairo MDF 15 mm' },
  ];

  ancho: number | null = null;
  alto: number | null = null;
  profundidad: number | null = null;
  posteIzq: number = 50;
  posteDerecho: number = 50;
  anchoPuerta: number | null = null;
  anchoContraventanas: number | null = null;
  mostrarCantidad: boolean = false;
  mostrarAlto: boolean = false;
  mostrarContraventanas: boolean = false;
  mostrarSecreter: boolean = false;
  mostrarFrentesCajon: boolean = false;
  mostrarCostado: boolean = false;
  mostrarMaletero: boolean = false;
  maleteroAncho: number | null = null;
  maleteroAlto: number | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  descargarPDF() {
    const element = document.getElementById('pdf-content'); // Ajusta esto si es necesario
    if (element) {
      // Ocultar los botones antes de generar el PDF
      document.querySelectorAll('.no-print').forEach((el) => {
        (el as HTMLElement).style.display = 'none';
      });

      // Generar el PDF usando html2canvas y jsPDF
      html2canvas(element, {
        scale: 2,
        useCORS: true,
      }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('closet.pdf');

        // Restaurar la visibilidad de los botones después de generar el PDF
        document.querySelectorAll('.no-print').forEach((el) => {
          (el as HTMLElement).style.display = '';
        });
      });
    }
  }

  // Función genérica para ajustar el valor de un poste
  ajustarPoste(tipo: 'izq' | 'der', valor: number) {
    if (tipo === 'izq') {
      const nuevoValorIzq = this.posteIzq - valor;
      if (nuevoValorIzq >= 0) {
        this.posteIzq = nuevoValorIzq;
      }
    } else if (tipo === 'der') {
      const nuevoValorDer = this.posteDerecho + valor;
      if (nuevoValorDer >= 0) {
        this.posteDerecho = nuevoValorDer;
      }
    }
    this.calcularAnchoPuertaSolo(); // Recalcula solo el ancho de las puertas
  }

  calcularAnchoPuertaSolo() {
    if (this.ancho !== null && this.ancho > 0 && this.posteIzq >= 0 && this.posteDerecho >= 0) {
      const resultadoAnchoPuerta = (this.ancho - 600 - this.posteIzq - 30 - this.posteDerecho) / 4 + 10;

      if (resultadoAnchoPuerta > 0) {
        this.anchoPuerta = resultadoAnchoPuerta;
      } else {
        this.resetVisibilidad();
      }
    } else {
      this.resetVisibilidad();
    }
  }

  // Método para calcular el ancho de las puertas
  calcularAnchoPuerta() {
    if (this.ancho !== null && this.ancho > 0 && this.posteIzq >= 0 && this.posteDerecho >= 0) {
      const resultadoAnchoPuerta = (this.ancho - 600 - this.posteIzq - 30 - this.posteDerecho) / 4 + 10;

      if (resultadoAnchoPuerta > 0) {
        this.anchoPuerta = resultadoAnchoPuerta;
        this.mostrarCantidad = true;
        this.mostrarAlto = true;
        this.mostrarSecreter = true;
        this.calcularMaletero();
        this.calcularAnchoContraventanas(); // Llamada para calcular contraventanas
      } else {
        this.resetVisibilidad();
      }
    } else {
      this.resetVisibilidad();
    }
  }

  calcularAnchoContraventanas() {
    if (this.ancho !== null && this.ancho > 0 && this.posteIzq >= 0 && this.posteDerecho >= 0) {
      const resultadoAnchoContraventanas = (this.ancho - this.posteIzq - 32 - this.posteDerecho) / 4 + 10;

      if (resultadoAnchoContraventanas > 0) {
        this.anchoContraventanas = resultadoAnchoContraventanas;
        this.mostrarContraventanas = true;
      } else {
        this.resetVisibilidad();
      }
    } else {
      this.resetVisibilidad();
    }
  }

  calcularMaletero() {
    if (this.ancho !== null && this.ancho > 0 && this.profundidad !== null && this.profundidad > 20) {
      this.maleteroAncho = +this.ancho + 50;
      this.maleteroAlto = +this.profundidad - 20;
      this.mostrarMaletero = true;
    } else {
      this.mostrarMaletero = false;
      this.maleteroAncho = null;
      this.maleteroAlto = null;
    }
  }

  onAltoChange() {
    this.mostrarFrentesCajon = this.alto !== null && this.alto > 0;
  }

  onCostadoChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.mostrarCostado = inputElement.checked;
  }

  resetVisibilidad() {
    this.anchoPuerta = null;
    this.mostrarCantidad = false;
    this.mostrarAlto = false;
    this.mostrarContraventanas = false;
    this.mostrarSecreter = false;
    this.anchoContraventanas = null;
    this.mostrarFrentesCajon = false;
    this.mostrarCostado = false;
    this.mostrarMaletero = false;
    this.maleteroAncho = null;
    this.maleteroAlto = null;
  }

  // Función para agregar un entrepaño a la lista de seleccionados
  addEntrepeneria(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const value = selectElement.value;

    if (!value) return;
    const [ancho, alto] = value.split(' ')[2].split('/').map(Number);
    const existingEntrepano = this.entrepanerias.find(entrepano => entrepano.ancho === ancho && entrepano.alto === alto);

    if (existingEntrepano) {
      existingEntrepano.cantidad += 1;
    } else {
      this.entrepanerias.push({ ancho, alto, color: 'C.I.', cantidad: 1 });
    }
    selectElement.value = '';
  }


}

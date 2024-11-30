import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fp-small',
  templateUrl: './fp-small.component.html',
  styleUrl: './fp-small.component.css'
})
export class FpSmallComponent {
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
  altoContrav: number = 600;
  altoPuertas: number = 1940;
  cantidadPuertas: number = 2;
  cantidadContrav: number = 4;
  cantidadFrentes: number = 6;
  cantidadCostado: number = 1;
  cantidadMaletero: number = 1;
  secreter: number = 2;
  anchoSecreter: number = 295;
  altoSecreter: number = 740;
  anchoFrentes: number | null = 200;
  altoFrentes: number | null = 595;
  altoCostado: number = 2400;
  anchoCostado: number = 620;
  mostrarCantidad: boolean = false;
  mostrarAlto: boolean = false;
  mostrarContraventanas: boolean = false;
  mostrarSecreter: boolean = false;
  mostrarFrentesCajon: boolean = false;
  mostrarCostado: boolean = false;
  mostrarMaletero: boolean = false;
  maleteroAncho: number | null = null;
  maleteroAlto: number | null = null;
  selectedColorExterior: number | null = null;
  selectedColorInterior: number | null = null;
  selectedExteriorName: string | null = null;
  selectedInteriorName: string | null = null;
  mostrarContraventanasRojo: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {}

  descargarPDF() {
    const element = document.getElementById('pdf-content');
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

  descargarCSV() {
    // Encabezados del CSV
    const headers = ['Codigo', 'Cantidad', 'Largo', 'Ancho', 'Material', 'Descripcion', 'Observacion'];

    // Crear un array para almacenar las filas de datos
    const rows1 = [];

    // 1. Agregar la información de Puertas y Contraventanas
    if (this.anchoPuerta !== null) {
      rows1.push({
        codigo: '',
        cantidad: this.cantidadPuertas.toString() || '',
        largo: this.altoPuertas.toString() || '',
        ancho: this.anchoPuerta?.toString() || '',
        material: this.selectedColorExterior?.toString() || 'N/A',
        descripcion: 'Puertas @L1 @B1 @T1 @R1',
        observacion: ''
      });
      rows1.push({
        codigo: '',
        cantidad: this.cantidadContrav.toString() || '',
        largo: this.altoContrav.toString() || '',
        ancho: this.anchoContraventanas?.toString() || '',
        material: this.selectedColorExterior?.toString() || 'N/A',
        descripcion: 'Contraventanas @L1 @B1 @T1 @R1',
        observacion: ''
      });
    }

    // 2. Información del Secreter
    if (this.mostrarSecreter) {
      rows1.push({
        codigo: '',
        cantidad: this.secreter.toString() || '',
        largo: this.altoSecreter.toString() || '',
        ancho: this.anchoSecreter.toString() || '',
        material: this.selectedColorExterior?.toString() || 'N/A',
        descripcion: 'Secreter @L1 @B1 @T1 @R1',
        observacion: ''
      });
    }

    // 3. Información del Costado
    if (this.mostrarCostado) {
      rows1.push({
        codigo: '',
        cantidad: this.cantidadCostado.toString() || '',
        largo: this.altoCostado.toString() || '',
        ancho: this.anchoCostado.toString() || '',
        material: this.selectedColorExterior?.toString() || 'N/A',
        descripcion: 'Costado @B1',
        observacion: ''
      });
    }

    // 4. Información del Maletero // va a otro CSV
    // if (this.mostrarMaletero) {
    //   rows.push({
    //     codigo: '',
    //     cantidad: this.cantidadMaletero.toString() || '',
    //     largo: this.maleteroAlto?.toString() || '',
    //     ancho: this.maleteroAncho?.toString() || '',
    //     material: this.selectedColorInterior?.toString() || 'N/A',
    //     observacion: ''
    //   });
    // }

    // 5. Información de los Frentes de Cajón
    if (this.mostrarFrentesCajon) {
      rows1.push({
        codigo: '',
        cantidad: this.cantidadFrentes.toString() || '',
        largo: this.altoFrentes?.toString() || '',
        ancho: this.anchoFrentes?.toString() || '',
        material: this.selectedColorExterior?.toString() || 'N/A',
        descripcion: 'Frente @L1 @B1 @T1 @R1',
        observacion: ''
      });
    }

    // 6. Información de las Entrepañerías internas
    // va a otro CSV
    // this.entrepanerias.forEach((entrepaneria, index) => {
    //   rows.push({
    //     codigo: `00${7 + index}`,
    //     cantidad: entrepaneria.cantidad.toString(),
    //     largo: entrepaneria.alto.toString(),
    //     ancho: entrepaneria.ancho.toString(),
    //     material: this.selectedColorInterior?.toString() || 'N/A',
    //     descripcion: `Entrepaño @B${index + 1}`,
    //     observacion: ''
    //   });
    // });

    // Ordenar las filas por largo y luego por ancho de mayor a menor
    rows1.sort((a, b) => {
        if (parseFloat(b.largo) === parseFloat(a.largo)) {
          return parseFloat(b.ancho) - parseFloat(a.ancho);
        }
        return parseFloat(b.largo) - parseFloat(a.largo);
      });

    // Convertir datos a formato CSV
    const csvContent = [headers.join(','), ...rows1.map(row => Object.values(row).join(','))].join('\n');

    // Crear y descargar el archivo CSV
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'closet.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    const headers2 = ['Codigo', 'Cantidad', 'Largo', 'Ancho', 'Material', 'Descripcion', 'Observacion'];

    const rows2 = [];

     // 6. Información de las Entrepañerías internas
    // va a otro CSV
    // this.entrepanerias.forEach((entrepaneria, index) => {
    //   rows.push({
    //     codigo: `00${7 + index}`,
    //     cantidad: entrepaneria.cantidad.toString(),
    //     largo: entrepaneria.alto.toString(),
    //     ancho: entrepaneria.ancho.toString(),
    //     material: this.selectedColorInterior?.toString() || 'N/A',
    //     descripcion: `Entrepaño @B${index + 1}`,
    //     observacion: ''
    //   });
    // });

  }

  // Función genérica para ajustar el valor de un poste
ajustarPoste(tipo: 'izq' | 'der', cambio: number) {
  if (tipo === 'izq') {
    const nuevoValorIzq = this.posteIzq + cambio;
    if (nuevoValorIzq >= 0) {
      this.posteIzq = nuevoValorIzq;
    }
  } else if (tipo === 'der') {
    const nuevoValorDer = this.posteDerecho + cambio;
    if (nuevoValorDer >= 0) {
      this.posteDerecho = nuevoValorDer;
    }
  }
  this.calcularAnchoPuertaSolo(); // Recalcula solo el ancho de las puertas
}

  calcularAnchoPuertaSolo() {
  if (this.ancho !== null && this.ancho > 0 && this.posteIzq >= 0 && this.posteDerecho >= 0) {
    const anchoBase = 285; // Suponiendo que este es el ancho base cuando los postes están en 50 mm cada uno
    const ajusteIzq = (50 - this.posteIzq); // Ajuste del poste izquierdo
    const ajusteDer = (50 - this.posteDerecho); // Ajuste del poste derecho

    // Calculamos el nuevo ancho de la puerta sumando los ajustes de ambos postes
    const nuevoAnchoPuerta = anchoBase + ajusteIzq + ajusteDer;

    if (nuevoAnchoPuerta > 0) {
      this.anchoPuerta = nuevoAnchoPuerta;
    } else {
      this.resetVisibilidad();
    }
  } else {
    this.resetVisibilidad();
  }
}

  // Método para calcular el ancho de las puertas
  calcularAnchoPuerta() {
    if (this.ancho !== null && this.ancho > 0) {
      const resultadoAnchoPuerta = (this.ancho - 600 - this.posteIzq - 30 - this.posteDerecho) / 2 + 10;

      if (resultadoAnchoPuerta > 0) {
        this.anchoPuerta = resultadoAnchoPuerta;
        this.mostrarCantidad = true;
        this.mostrarAlto = true;
        this.mostrarSecreter = true;
      } else {
        this.anchoPuerta = null;
        this.mostrarCantidad = false;
        this.mostrarAlto = false;
        this.mostrarSecreter = false;
      }
    } else {
      this.anchoPuerta = null;
      this.mostrarCantidad = false;
      this.mostrarAlto = false;
      this.mostrarSecreter = false;
    }

    this.calcularAnchoContraventanas();
    this.calcularMaletero();
    this.cdr.detectChanges(); // Forzar la detección de cambios
  }

  calcularAnchoContraventanas() {
    if (this.ancho !== null && this.ancho > 0) {
      const resultadoAnchoContraventanas = (this.ancho - this.posteIzq - 32 - this.posteDerecho) / 4 + 10;

      if (resultadoAnchoContraventanas > 0) {
        this.anchoContraventanas = resultadoAnchoContraventanas;
        this.mostrarContraventanas = true;
      } else {
        this.anchoContraventanas = null;
        this.mostrarContraventanas = false;
      }
    } else {
      this.anchoContraventanas = null;
      this.mostrarContraventanas = false;
    }
    this.cdr.detectChanges(); // Forzar la detección de cambios
  }

  calcularMaletero() {
  if (this.ancho !== null && this.ancho > 0 && this.profundidad !== null && this.profundidad > 20) {
    this.maleteroAncho = +this.ancho + 50;
    this.maleteroAlto = +this.profundidad - 20;
    this.mostrarMaletero = true;
  } else {
    this.maleteroAncho = null;
    this.maleteroAlto = null;
    this.mostrarMaletero = false;
  }
  this.cdr.detectChanges(); // Forzar la detección de cambios
}

onAltoChange() {
  if (this.alto !== null && this.alto.toString().length >= 4) {
    // Asignar valores predeterminados cuando el "Alto" es válido
    this.mostrarFrentesCajon = true;
    this.altoFrentes = 595;
    this.anchoFrentes = 220;

    if (this.alto < 2600) {
      Swal.fire({
        title: 'Revisión de contraventanas',
        text: 'La altura ingresada es menor a 2500mm. Se sugiere revisar las contraventanas.',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.isConfirmed) {
          if (this.alto !== null) {
            const alturaContraventanas = this.alto - 1940 - 60;
            this.altoContrav = alturaContraventanas; // Actualiza el alto de las contraventanas
            this.mostrarContraventanasRojo = true; // Resalta la fila de contraventanas en rojo
          }
        }
      });
    }

    if (this.alto > 3000) {
      Swal.fire({
        title: 'Altura elevada',
        text: 'La altura ingresada supera los 2900mm. Te sugerimos usar contraventanas de 800mm.',
        icon: 'warning',
        confirmButtonText: 'Aceptar',
        footer: '<a href="#">¿Qué son contraventanas de 800mm?</a>'
      }).then(() => {
        this.mostrarContraventanasRojo = true;
        this.altoContrav = 800; // Asigna un valor por defecto a las contraventanas
      });
    }

  } else {
    // Limpia los valores si el "Alto" es inválido
    this.mostrarFrentesCajon = false;
    this.altoFrentes = null;
    this.anchoFrentes = null;
  }

  this.calcularAnchoPuerta();
  this.cdr.detectChanges(); // Forzar la detección de cambios en la vista
}

onContraventanaAltoChange() {
  if (this.altoContrav === 800) {
    this.mostrarContraventanasRojo = false; // Quita el fondo rojo de la fila
  }
}

  onProfundidadChange() {
    this.calcularMaletero();
    this.cdr.detectChanges(); // Forzar la detección de cambios
  }

  onCostadoChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.mostrarCostado = inputElement.checked;
  }

  // Método para actualizar el nombre del color seleccionado
  onColorExteriorChange() {
    const colorSeleccionado = this.colores.find(color => color.codigo === this.selectedColorExterior);
    this.selectedExteriorName = colorSeleccionado ? colorSeleccionado.nombre : null;
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

  addEntrepeneria(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const value = selectElement.value;

    if (!value) return;

    const [ancho, alto] = value.split(' ')[2].split('/').map(Number);

    // Buscar si ya existe un entrepaño con las mismas dimensiones
    const existingEntrepano = this.entrepanerias.find(entrepano => entrepano.ancho === ancho && entrepano.alto === alto);

    if (existingEntrepano) {
      existingEntrepano.cantidad += 1;
    } else {
      // Agregar el nuevo entrepaño con el color interior seleccionado
      const colorNombre = this.colores.find(color => color.codigo === this.selectedColorInterior)?.nombre || 'N/A';
      this.entrepanerias.push({
        ancho,
        alto,
        color: colorNombre,
        cantidad: 1
      });
    }

    selectElement.value = '';
  }
}

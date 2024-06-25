import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  // larguraInicialPercentual: number = 20; // Largura inicial da div em %
  // larguraMaximaPercentual: number = 50; // Largura máxima que a div pode alcançar em %

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   // Calcula a nova largura baseada na posição vertical da janela
  //   let scrollPosition = window.scrollY;
  //   this.atualizarLargura(scrollPosition);
  // }

  // private atualizarLargura(scrollPosition: number) {
  //   // Altura total do conteúdo rolável da página
  //   let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

  //   // Calcula a porcentagem de rolagem
  //   let scrollPercentage = (scrollPosition / scrollHeight) * 100;

  //   // Calcula a largura em porcentagem com base na porcentagem de rolagem
  //   this.larguraInicialPercentual = Math.min(this.larguraMaximaPercentual, 20 + scrollPercentage);
  // }



}

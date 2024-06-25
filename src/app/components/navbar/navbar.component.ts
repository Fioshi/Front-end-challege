import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @ViewChild('progressBar') progressBar!: ElementRef;

  larguraInicialPercentual: number = 0; 
  larguraMaximaPercentual: number = 100;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let scrollPosition = window.scrollY;
    this.atualizarLargura(scrollPosition);
  }

  private atualizarLargura(scrollPosition: number) {

    const bar = this.progressBar.nativeElement;
  
    let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  
    let scrollPercentage = (scrollPosition / scrollHeight) * 100;
  
    let novaLarguraPercentual = Math.min(this.larguraMaximaPercentual, this.larguraInicialPercentual + scrollPercentage);
  
    bar.style.width = `${novaLarguraPercentual}%`;
    
  }
}

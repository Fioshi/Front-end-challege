import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-water',
  standalone: true,
  imports: [],
  templateUrl: './water.component.html',
  styleUrl: './water.component.css'
})
export class WaterComponent implements OnInit {

  backgrounds: string[] = [];

  @ViewChild('backgroundContainer')
  elementToAnimate!: ElementRef;


  constructor(private elRef: ElementRef) {
    this.generateBackgrounds();
  }

  ngOnInit() {
    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       this.generateBackgrounds();
    //       observer.unobserve(entry.target);
    //       console.log(entry.target)
    //     }
    //   });
    // });

    // observer.observe(this.elementToAnimate.nativeElement);
  }

  private alreadyExecuted = false;
  private observer!: IntersectionObserver;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkIfIsVisible()
  }

  private checkIfIsVisible(){
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.alreadyExecuted = true;
          this.updateBackground();
        }
      });
    });

    this.observer.observe(this.elementToAnimate.nativeElement);
  }

  private generateBackgrounds(): void {
    for (let i = 0; i <= 191; i++) {
      const filename = `assets/imgs/water/water_${i.toString().padStart(3, '0')}.jpg`;
      this.backgrounds.push(filename);
      console.log(`Image path: ${filename}`);
    }
  }


  private updateBackground(): void {
    const container = this.elRef.nativeElement.querySelector('.background-container');
    const scrollPosition = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollPosition / maxScroll;
    const backgroundIndex = ((Math.floor(scrollPercentage * 200)) - 100)
    const imagePath = this.backgrounds[backgroundIndex];
    console.log(imagePath)
    console.log(backgroundIndex)

    // Verificar se a imagem existe
    const img = new Image();
    img.src = imagePath;
    img.onload = () => {
      container.style.backgroundImage = `url(${imagePath})`;
    };
  }
}

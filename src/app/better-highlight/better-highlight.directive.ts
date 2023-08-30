

export class BetterHighlightDirective implements DeviceOrientationEventInit{
    constructor(private elRef: ElementRef, private renderer: Renderer2){}

    ngOnInit()
    {
        this.renderer.setStyle{this.elRef.nativeElement,'background-color','blue'};
        
    }
}
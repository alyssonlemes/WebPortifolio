import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import CameraControls from 'camera-controls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { ThemeService } from '../services/theme.service';
CameraControls.install( { THREE: THREE } );
globalThis.THREE = THREE;

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.css']
})
export class EarthComponent implements OnInit {
  private themeService = new ThemeService();
  public renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();

  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  ngOnInit(): void {
    let width = 500;
    let height = 500;
    const clock = new THREE.Clock();
    const scene = new THREE.Scene();

    setWindowSize();

    const camera = new THREE.PerspectiveCamera( 28, width / height, 0.01, 100 );
    let directionalLight: THREE.DirectionalLight | null = null;

    // @ts-ignore
    globalThis.camera = camera;
    camera.position.set( 0, 0, 5 );
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas.nativeElement });
    this.renderer.setSize( width, height );

    const cameraControls = new CameraControls( camera, this.renderer.domElement );
    cameraControls.mouseButtons.left = CameraControls.ACTION.ROTATE;
    cameraControls.mouseButtons.right = CameraControls.ACTION.NONE;
    cameraControls.mouseButtons.wheel = CameraControls.ACTION.NONE;

    // @ts-ignore
    cameraControls.touches.one = CameraControls.ACTION.ROTATE;
    cameraControls.touches.two = CameraControls.ACTION.NONE;
    cameraControls.touches.three = CameraControls.ACTION.NONE;

    // @ts-ignore
    globalThis.cameraControls = cameraControls;

    const loader = new GLTFLoader();
    loader.load(
      'assets/gltf/low_poly_earth.gltf',
      ( gltf ) => {
        const model = gltf.scene;

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.copy(camera.position);
        scene.add(directionalLight);

        scene.add( model );
        this.renderer.setClearColor(new THREE.Color(this.themeService.isDarkTheme() ? "#181a1b" : "#ffffff"));
        this.renderer.render( scene, camera );
      },
      ( xhr ) => {
        console.log( 'Earth ' +( xhr.loaded / xhr.total * 100 ) + '% loaded' );
      },
      ( error ) => {
        console.error( 'An error happened', error );
      }
    );

    let userDragging = false;
    let disableAutoRotate = false;

    const onRest = () => {
      cameraControls.removeEventListener( 'rest', onRest );
      userDragging = false;
      disableAutoRotate = false;
    }

    cameraControls.addEventListener( 'controlstart', () => {
      cameraControls.removeEventListener( 'rest', onRest );
      userDragging = true;
      disableAutoRotate = true;
    } );

    cameraControls.addEventListener( 'controlend', () => {
      if ( cameraControls.active )
        cameraControls.addEventListener( 'rest', onRest );
      else
        onRest();
    } );

    cameraControls.addEventListener( 'transitionstart', () => {
      if ( userDragging ) return;
      disableAutoRotate = true;
      cameraControls.addEventListener( 'rest', onRest );
    } );

    const renderer = this.renderer;

    ( function anim () {
      const delta = clock.getDelta();
      const updated = cameraControls.update( delta );
      updateLightPosition(camera);
      if ( !disableAutoRotate )
        cameraControls.azimuthAngle += 20 * delta * THREE.MathUtils.DEG2RAD;

      if (updated)
        renderer.render( scene, camera );

      requestAnimationFrame( anim );
    } )();

    function updateLightPosition(camera: THREE.PerspectiveCamera) {
      if (directionalLight !== null) {
        directionalLight.position.copy(camera.position);
      }
    }
    const onWindowResize = () => {
      setWindowSize();
      this.renderer.setSize( width, height );
      camera.aspect = width / height;
    }

    window.addEventListener( 'resize', onWindowResize, false );

    function setWindowSize() {
      if(window.innerWidth > 1270){
        width = height = 500;
      } else if(window.innerWidth > 1000){
        width = height = 450;
      } else if(window.innerWidth > 700){
        width = height = 400;
      } else if(window.innerWidth > 460){
        width = height = 350;
      } else if(window.innerWidth > 320){
        width = height = 300;
      } else {
        width = height = 250;
      }
    }

    const themeButton = document.querySelectorAll('.toggle-checkbox') as NodeListOf<HTMLInputElement>;

    themeButton.forEach((button) => {
      button.addEventListener('change', () => {
        this.renderer.setClearColor(new THREE.Color(this.themeService.isDarkTheme() ? "#181a1b" : "#ffffff"));
        this.renderer.render( scene, camera );
      });
    });
  }
}

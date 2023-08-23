import { LightningElement, track, wire } from 'lwc';

export default class My3DModel extends LightningElement {
  sketchfabAPI;
  colorPicker;

  renderedCallback() {
    if (!this.sketchfabAPI) {
      this.loadSketchfabModel();
    }
  }

  loadSketchfabModel() {
    const script = document.createElement('script');
    script.src = 'https://static.sketchfab.com/api/sketchfab-viewer-1.6.1.js';
    script.onload = () => this.initializeSketchfab();
    document.body.appendChild(script);
  }

  initializeSketchfab() {
    this.sketchfabAPI = new window.Sketchfab.Viewer();
    this.sketchfabAPI.init(
      'sketchfabContainer',
      '8ef8749ade9c4f7d87eb22711fde19cb',
      { autospin: 0.2 }
    );
  }

  handleColorChange(event) {
    const color = event.target.value;
    this.sketchfabAPI.setColor(color);
  }
}

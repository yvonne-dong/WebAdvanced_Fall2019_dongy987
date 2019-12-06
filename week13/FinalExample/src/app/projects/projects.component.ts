import { Component, OnInit } from '@angular/core';
import { projects } from '../projects';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  data = projects;

  constructor() {
  }

  showDialog(event) {
    let closeModal = document.getElementById('project-description');
    let innerText = document.getElementById('inner-text')
    let innerProject = document.getElementById('inner-project')
    let idx = projects.findIndex(record => record.id === event.target.id);
    let projDescription = projects[idx].description;
    let projName = projects[idx].name;

    innerProject.innerHTML = projName;
    innerText.innerHTML = projDescription;
    closeModal.classList.remove('hhidden')
    closeModal.classList.add('sshow');
  }

  closeDialog() {
    let closeModal = document.getElementById('project-description');
    closeModal.classList.remove('sshow')
    closeModal.classList.add('hhidden');
  }

  ngOnInit() {

  }

}

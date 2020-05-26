import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  toolsicon = 'assets/tools.png';

  constructor() {

  }

  ngOnInit(): void {
  }

  toolsData: tools[] = [
    { icon: this.toolsicon, name: "Visual Studio Code" },
    { icon: this.toolsicon, name: "MS Visual Studio" },
    { icon: this.toolsicon, name: "PHP Storm" },
    { icon: this.toolsicon, name: "Netbeans" },
    { icon: this.toolsicon, name: "Eclipse" },
    { icon: this.toolsicon, name: "Version Control (git)" },
    { icon: this.toolsicon, name: "Project Management Using Microsft Azure (SCRUM))" }
  ];
}

export interface tools {
  icon: string;
  name: string;

}

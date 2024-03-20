import { Component } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 myForm:any;
  objects: any[]=[];
  count: number = 14;
  newObject: any = { id: '', name: '', data: { price: null, color: '' } };
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchObjects();
  }

  fetchObjects(): void {
    this.apiService.getObjects().subscribe(
      (response: any[]) => {
        this.objects = response;
      },
      (error) => {
        console.error('Error fetching objects:', error);
      }
    );
  }

  addObject(): void {
    this.newObject.id = this.generateUniqueId();
    const newObj = { ...this.newObject };

    this.apiService.addObject(newObj).subscribe(
      (response: any) => {
        console.log('Object added successfully:', response);
        this.objects.push(newObj)
        //this.newObject = { id: '', name: '', data: { price: null, color: '' } };
      },
      (error) => {
        console.error('Error adding object:', error);
      }
    );

   
  }
  del(index:number){
    alert("Are you sure for delete the record")
    this.objects.splice(index,1);
  }
  generateUniqueId(){
    const timestamp = new Date().getTime();
    return  this.count++;
  }
  clearForm(): void {
    this.newObject = { name: '', data: { color: '' } };
  }

}

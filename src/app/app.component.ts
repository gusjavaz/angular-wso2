import { Component , ViewEncapsulation} from '@angular/core';
import { AuthService}          from './private/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [AuthService]

})
export class AppComponent {
  title = 'Gestión de Empleados';
}

import { Pipe, PipeTransform } from '@angular/core';
import {API} from '../../config/api-global';
@Pipe({
  name: 'fixImageUrl'
})
export class FixImageUrlPipe implements PipeTransform {

  transform(imageName: any, ...args: any[]): any {
    return `${API.IMAGES_BASE_URL}projects/${imageName}`;
  }

}

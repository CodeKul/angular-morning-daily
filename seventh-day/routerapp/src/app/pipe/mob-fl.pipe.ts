import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mobFl',
  pure : false
})
export class MobFlPipe implements PipeTransform {

  transform(mobs: string[], args?: string): string[] {

    if (args) {
      let filtered = []

      mobs.forEach(mob => {
        if (mob.charAt(0) == args) {
          filtered.push(mob)
        }
      })

      return filtered;
    } return mobs
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'xSpace'
})
export class XSpacePipe implements PipeTransform {

  transform(value: string, ...info : any[]): string {
    if (!info)
      return value.split('').join(' ');;
    return value.split('').join(this.spacedStr(info[0] as number, info[1] as string))

  }
  private spacedStr(num : number, char : string) {
    let str = ''
    for (let i = 0; i < num; i++) {
      str += char
    }
    console.log(`Executed ${str}`)
    return str
  }
}

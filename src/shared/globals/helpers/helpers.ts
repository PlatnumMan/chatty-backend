export class Helpers {
  static firstLetterUppercased(str: string): string {
    const valueString = str.toLowerCase();
    return valueString
      .split(' ')
      .map((value: string) => `${value.charAt(0).toUpperCase()}${value.slice(1).toLowerCase()}`)
      .join(' ');
  }

  static lowerCase(str: string): string {
    return str.toLowerCase();
  }

  static generateRandomIntegers(integerLength: number): number {
    const characters = '0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < integerLength; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return parseInt(result, 10);
  }

  public static log = {
    info: (message: string) => {
      console.info('%c [INFO] %s : %s', 'color: blue', new Date().toISOString(), message);
    },
    error: (message: string, error: any) => {
      console.error('%c [ERROR] %s : %s', 'color: red', new Date().toISOString(), message, error);
    }
  };
}

import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

export function IsBboxValid(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isBboxValid',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (typeof value === 'string' && value.length > 0) {
            return !!value.match(/^(-?\d+,)(-?\d+,)(-?\d+,)(-?\d+)$/);
          }
          return false;
        },
      },
    });
  };
}

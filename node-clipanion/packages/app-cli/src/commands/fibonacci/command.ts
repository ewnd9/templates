import { Command } from 'clipanion';
import * as yup from 'yup';

export class FibonacciCommand extends Command {
  @Command.String({ required: true })
  public a!: number;

  @Command.String({ required: true })
  public b!: number;

  @Command.Path(`fibo`)
  async execute() {
    // ...
  }

  static schema = yup.object().shape({
    a: yup.number().integer(),
    b: yup.number().integer()
  });
}

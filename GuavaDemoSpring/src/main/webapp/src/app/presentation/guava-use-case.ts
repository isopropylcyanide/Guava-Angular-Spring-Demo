/**
 *
 * Defines what a Guava use case model looks like for the purpose of this demo
 * @export
 * @class GuavaUseCase
 */
export class GuavaUseCase {
  id: number;
  title: string;
  description: string;
  javaWay: string;
  guavaWay: string;
  guavaWayCaveats?: string;
  problemStatement: string;
  defaultInputs?: string;
  link?: string;
}

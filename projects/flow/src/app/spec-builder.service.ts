import { Injectable } from '@angular/core';
import { Step } from './state/step-state.service';

const specTemplate = (content: string) => `import { browser, element, by } from 'protractor';

describe('Test Spec', () => {
  it('should work somehow', () => {
${content}
  });
});
`;

@Injectable({ providedIn: 'root' })
export class SpecBuilderService {

  build(steps: Step[]): string {
    const stepsTemplate: string = steps.map(stepTemplate).join('\n');
    return specTemplate(stepsTemplate);
  }
}

const stepTemplate = (step: Step) => {
  const selectTemplate = select(step.xpath);
  const stepTemplateFactory = stepTemplateFactoryBuilder[step.id];
  return stepTemplateFactory(padd(selectTemplate, 4));
};

const select = (xpath: string) => {
  return `element(by.xpath('${xpath}'))`;
};

const click = (element: string) => {
  return `${element}.click();`;
};

const focus = (element: string) => {
  return `${element}.focus();`;
};

const hover = (element: string) => {
  return `${element}.hover();`;
};

const stepTemplateFactoryBuilder = {
  click, focus, hover,
};

const padd = (text: string, paddLen: number) => {
  return text
    .split('\n')
    .map(line => `${' '.repeat(paddLen)}${line}`)
    .join('\n');
};

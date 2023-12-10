import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { getComponentByWorkflowTaskOption } from './claimed-task-actions-decorator';
import { ClaimedTask } from '../../../../core/tasks/models/claimed-task-object.model';
import { MyDSpaceActionsResult } from '../../mydspace-actions';
import { Item } from '../../../../core/shared/item.model';
import { WorkflowItem } from '../../../../core/submission/models/workflowitem.model';
import { ClaimedTaskActionsAbstractComponent } from '../abstract/claimed-task-actions-abstract.component';
import { AbstractComponentLoaderComponent } from '../../../abstract-component-loader/abstract-component-loader.component';
import { GenericConstructor } from '../../../../core/shared/generic-constructor';

@Component({
  selector: 'ds-claimed-task-actions-loader',
  templateUrl: '../../../abstract-component-loader/abstract-component-loader.component.html',
})
/**
 * Component for loading a ClaimedTaskAction component depending on the "option" input
 * Passes on the ClaimedTask to the component and subscribes to the processCompleted output
 */
export class ClaimedTaskActionsLoaderComponent extends AbstractComponentLoaderComponent<ClaimedTaskActionsAbstractComponent> {
  /**
   * The item object that belonging to the ClaimedTask object
   */
  @Input() item: Item;

  /**
   * The ClaimedTask object
   */
  @Input() object: ClaimedTask;

  /**
   * The name of the option to render
   * Passed on to the decorator to fetch the relevant component for this option
   */
  @Input() option: string;

  /**
   * The workflowitem object that belonging to the ClaimedTask object
   */
  @Input() workflowitem: WorkflowItem;

  /**
   * Emits the success or failure of a processed action
   */
  @Output() processCompleted = new EventEmitter<MyDSpaceActionsResult>();

  /**
   * The list of input and output names for the dynamic component
   */
  protected inputNames: (keyof this & string)[] = [
    ...this.inputNames,
    'item',
    'object',
    'option',
    'workflowitem',
  ];

  protected outputNames: (keyof this & string)[] = [
    ...this.outputNames,
    'processCompleted',
  ];

  public getComponent(): GenericConstructor<ClaimedTaskActionsAbstractComponent> {
    return getComponentByWorkflowTaskOption(this.option);
  }

}

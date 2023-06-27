import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AccessControlModule } from '../access-control/access-control.module';
import { ItemPageModule } from '../item-page/item-page.module';
import { FormModule } from '../shared/form/form.module';
import { SharedModule } from '../shared/shared.module';
import { StatisticsModule } from '../statistics/statistics.module';
import { SubmissionModule } from '../submission/submission.module';
import { AdvancedWorkflowActionPageComponent } from './advanced-workflow-action/advanced-workflow-action-page/advanced-workflow-action-page.component';
import { AdvancedWorkflowActionRatingComponent } from './advanced-workflow-action/advanced-workflow-action-rating/advanced-workflow-action-rating.component';
import { AdvancedWorkflowActionSelectReviewerComponent } from './advanced-workflow-action/advanced-workflow-action-select-reviewer/advanced-workflow-action-select-reviewer.component';
import { ReviewersListComponent } from './advanced-workflow-action/advanced-workflow-action-select-reviewer/reviewers-list/reviewers-list.component';
import { AdvancedWorkflowActionsDirective } from './advanced-workflow-action/advanced-workflow-actions-loader/advanced-workflow-actions.directive';
import { AdvancedWorkflowActionsLoaderComponent } from './advanced-workflow-action/advanced-workflow-actions-loader/advanced-workflow-actions-loader.component';
import { ThemedWorkflowItemDeleteComponent } from './workflow-item-delete/themed-workflow-item-delete.component';
import { WorkflowItemDeleteComponent } from './workflow-item-delete/workflow-item-delete.component';
import { ThemedWorkflowItemSendBackComponent } from './workflow-item-send-back/themed-workflow-item-send-back.component';
import { WorkflowItemSendBackComponent } from './workflow-item-send-back/workflow-item-send-back.component';
import { WorkflowItemsEditPageRoutingModule } from './workflowitems-edit-page-routing.module';

@NgModule({
  imports: [
    WorkflowItemsEditPageRoutingModule,
    CommonModule,
    SharedModule,
    SubmissionModule,
    StatisticsModule,
    ItemPageModule,
    AccessControlModule,
    FormModule,
    NgbModule,
  ],
  declarations: [
    WorkflowItemDeleteComponent,
    ThemedWorkflowItemDeleteComponent,
    WorkflowItemSendBackComponent,
    ThemedWorkflowItemSendBackComponent,
    AdvancedWorkflowActionsLoaderComponent,
    AdvancedWorkflowActionRatingComponent,
    AdvancedWorkflowActionSelectReviewerComponent,
    AdvancedWorkflowActionPageComponent,
    AdvancedWorkflowActionsDirective,
    ReviewersListComponent,
  ],
})
/**
 * This module handles all modules that need to access the workflowitems edit page.
 */
export class WorkflowItemsEditPageModule {

}

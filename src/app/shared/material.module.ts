import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Material Modules */
import { MdSidenavModule } from '@angular/material';
import { MdButtonModule } from '@angular/material'
import { MdListModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdCardModule, MdGridListModule } from '@angular/material';

@NgModule({
	imports: [
	MdSidenavModule,
    MdButtonModule,
    MdListModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdGridListModule
	],
	exports: [
	MdSidenavModule,
    MdButtonModule,
    MdListModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdGridListModule,
    CommonModule
	]
})
export class MaterialModule {}
﻿import { ILatLong } from './ilatlong';
import { IPoint } from './ipoint';
import { IMarkerIconInfo } from './imarkericoninfo';

export interface IMarkerOptions {
    anchor?: IPoint;
    position: ILatLong;
    title?: string;
    text?: string;
    label?: string;
    draggable?: boolean;
    isFirst?: boolean;
    isLast?: boolean;
    icon?: string;
    width?: number;
    height?: number;
    iconInfo?: IMarkerIconInfo;
    metadata?: Map<string, any>;
    visible?: boolean;
}
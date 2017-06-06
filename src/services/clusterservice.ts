﻿import { Injectable, NgZone } from '@angular/core';
import { IMarkerOptions } from "../interfaces/imarkeroptions";
import { Marker } from '../models/marker';
import { Layer } from '../models/layer';
import { ClusterLayer } from '../components/clusterlayer'

/**
 * Abstract class to to define teh cluster layer service contract. Must be realized by implementing provider. 
 * 
 * @export
 * @abstract
 * @class ClusterService
 */
@Injectable()
export abstract class ClusterService {

    /**
     * Adds a layer to the map.
     * 
     * @abstract
     * @param {ClusterLayer} layer - ClusterLayer component object. Generally, ClusterLayer will be injected with an instance of the 
     * ClusterService and then self register on initialization. 
     * 
     * @memberof ClusterService
     */
    public abstract AddLayer(layer: ClusterLayer): void;

    /**
     * Returns the Layer model represented by this layer. 
     * 
     * @abstract
     * @param {ClusterLayer} layer - ClusterLayer component object for which to retrieve the layer model.
     * @returns {Promise<Layer>} - A promise that when resolved contains the Layer model. 
     * 
     * @memberof ClusterService
     */
    public abstract GetNativeLayer(layer: ClusterLayer): Promise<Layer>;

    /**
     * Deletes the layer
     * 
     * @abstract
     * @param {ClusterLayer} layer - ClusterLayer component object for which to retrieve the layer.
     * @returns {Promise<void>} - A promise that is fullfilled when the layer has been removed. 
     * 
     * @memberof ClusterService
     */
    public abstract DeleteLayer(layer: ClusterLayer): Promise<void>;

    /**
     * Adds a marker to the layer. 
     * 
     * @abstract
     * @param {number} layer - The id of the layer to which to add the marker. 
     * @param {IMarkerOptions} options - Marker options defining the marker. 
     * @returns {Promise<Marker>} - A promise that when fullfilled contains the an instance of the Marker model.
     * 
     * @memberof ClusterService
     */
    public abstract CreateMarker(layer: number, options: IMarkerOptions): Promise<Marker>;

    /**
     * Start to actually cluster the entities in a cluster layer. This method should be called after the initial set of entities 
     * have been added to the cluster. This method is used for performance reasons as adding an entitiy will recalculate all clusters.
     * As such, StopClustering should be called before adding many entities and StartClustering should be called once adding is 
     * complete to recalculate the clusters.
     * 
     * @param {ClusterLayer} layer - ClusterLayer component object for which to retrieve the layer.
     * @returns {Promise<void>} 
     * 
     * @memberof ClusterService
     */
    public abstract StartClustering(layer: ClusterLayer): Promise<void>;

    /**
     * Stop to actually cluster the entities in a cluster layer.  
     * This method is used for performance reasons as adding an entitiy will recalculate all clusters.
     * As such, StopClustering should be called before adding many entities and StartClustering should be called once adding is 
     * complete to recalculate the clusters.
     * 
     * @param {ClusterLayer} layer - ClusterLayer component object for which to retrieve the layer.
     * @returns {Promise<void>} 
     * 
     * @memberof ClusterService
     */
    public abstract StopClustering(layer: ClusterLayer): Promise<void>;

}
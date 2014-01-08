//
//  MKMapView+ZoomLevel.h
//  whenst
//
//  Created by Dylan Keil on 06/01/12.
//  Copyright (c) 2012 Dylan Keil. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <MapKit/MapKit.h>

@interface MKMapView (ZoomLevel)

- (void)setCenterCoordinate:(CLLocationCoordinate2D)centerCoordinate
                  zoomLevel:(NSUInteger)zoomLevel
                   animated:(BOOL)animated;

@end

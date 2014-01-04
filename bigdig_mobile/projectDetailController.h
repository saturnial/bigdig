//
//  projectDetailController.h
//  bigdig_mobile
//
//  Created by Dylan Keil on 1/4/14.
//  Copyright (c) 2014 Dylan Keil. All rights reserved.
//

#import "MKMapView+ZoomLevel.h"
#import <MapKit/MapKit.h>
#import <UIKit/UIKit.h>

@interface projectDetailController : UIViewController<UITableViewDelegate, UITableViewDataSource, UITextFieldDelegate, MKMapViewDelegate>
@property (weak, nonatomic) IBOutlet MKMapView *myMap;

@end

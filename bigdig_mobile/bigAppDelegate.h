//
//  bigAppDelegate.h
//  bigdig_mobile
//
//  Created by Dylan Keil on 1/4/14.
//  Copyright (c) 2014 Dylan Keil. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <CoreLocation/CoreLocation.h>
#import <CoreMotion/CoreMotion.h>

@interface bigAppDelegate : UIResponder <UIApplicationDelegate>

@property (strong, nonatomic) UIWindow *window;
@property (nonatomic, strong) CLLocationManager *myLocationManager;

@end

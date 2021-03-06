//
//  addProjectController.h
//  bigdig_mobile
//
//  Created by Dylan Keil on 1/4/14.
//  Copyright (c) 2014 Dylan Keil. All rights reserved.
//

#import <MapKit/MapKit.h>
#import "MKMapView+ZoomLevel.h"
#import <UIKit/UIKit.h>

@interface addProjectController : UIViewController<UITextViewDelegate,UIImagePickerControllerDelegate>

@property (weak, nonatomic) IBOutlet UIImageView *projectImage;
- (IBAction)takePhoto:(id)sender;
@property (weak, nonatomic) IBOutlet UITextField *titleField;
@property (weak, nonatomic) IBOutlet UITextView *notesField;
@property (weak, nonatomic) IBOutlet UIImageView *dottedLine;
@property (weak, nonatomic) IBOutlet UIButton *votesBlankButton;
@property (weak, nonatomic) IBOutlet MKMapView *myMap;
@property (weak, nonatomic) IBOutlet UITextField *keypadText;
@property (weak, nonatomic) IBOutlet UIImageView *dottedLineDescription;

@end

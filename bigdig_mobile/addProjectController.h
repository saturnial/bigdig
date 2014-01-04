//
//  addProjectController.h
//  bigdig_mobile
//
//  Created by Dylan Keil on 1/4/14.
//  Copyright (c) 2014 Dylan Keil. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface addProjectController : UIViewController<UIImagePickerControllerDelegate>
@property (weak, nonatomic) IBOutlet UIImageView *projectImage;
- (IBAction)takePhoto:(id)sender;
- (IBAction)selectPhoto:(id)sender;

@end

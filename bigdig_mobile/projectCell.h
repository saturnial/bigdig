//
//  projectCell.h
//  bigdig_mobile
//
//  Created by Dylan Keil on 1/4/14.
//  Copyright (c) 2014 Dylan Keil. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface projectCell : UITableViewCell
@property (weak, nonatomic) IBOutlet UIImageView *projectImage;
@property (weak, nonatomic) IBOutlet UILabel *title;
@property (weak, nonatomic) IBOutlet UILabel *location;
@property (weak, nonatomic) IBOutlet UITextView *description;
@property (weak, nonatomic) IBOutlet UILabel *voteCount;

-(void)addProgressBar;
-(void)setProgress:(float)progress;
@end

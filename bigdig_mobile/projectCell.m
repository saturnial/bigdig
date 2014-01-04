//
//  projectCell.m
//  bigdig_mobile
//
//  Created by Dylan Keil on 1/4/14.
//  Copyright (c) 2014 Dylan Keil. All rights reserved.
//

#import "projectCell.h"
#import "MCProgressBarView.h"

@interface projectCell()
@property (strong, nonatomic) MCProgressBarView *progressBarView;

@end

@implementation projectCell

- (id)initWithStyle:(UITableViewCellStyle)style reuseIdentifier:(NSString *)reuseIdentifier
{
    self = [super initWithStyle:style reuseIdentifier:reuseIdentifier];
    if (self) {
        self.contentView.backgroundColor = [UIColor whiteColor];
        self.selectedBackgroundView = [[UIView alloc] init];
        self.selectedBackgroundView.backgroundColor = [UIColor colorWithWhite:0.0 alpha:0.5];
        
        self.projectImage.contentMode = UIViewContentModeScaleAspectFit;
        //self.projectImage.layer.masksToBounds = YES;


    }
    
    self.description.userInteractionEnabled = FALSE;
    
    return self;
}


-(void)addProgressBar{
    self.progressBarView = [[MCProgressBarView alloc]  initWithFrame:CGRectMake(20, 180, 280, 16)
                                                     backgroundImage:[[UIImage imageNamed:@"progress-bar-background"] resizableImageWithCapInsets:UIEdgeInsetsMake(0, 3, 0, 3)]
                                                     foregroundImage:[[UIImage imageNamed:@"progress-bar-foreground"] resizableImageWithCapInsets:UIEdgeInsetsMake(0, 3, 0, 3)]];
}

-(void)setProgress:(float)progress{
    self.progressBarView.progress = progress;
}

- (void)setSelected:(BOOL)selected animated:(BOOL)animated
{
    [super setSelected:selected animated:animated];

    // Configure the view for the selected state
}

@end

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
        
        self.textLabel.font = [UIFont fontWithName:@"BebasNeue" size:22];
        self.textLabel.textColor = [UIColor colorWithRed:55.0/255.0 green:146.0/255.0 blue:240.0/255.0 alpha:1.0];
        self.textLabel.adjustsFontSizeToFitWidth = YES;
        self.textLabel.minimumFontSize = 12;
        self.detailTextLabel.font = [UIFont fontWithName:@"BebasNeue" size:20];
        self.detailTextLabel.textColor = [UIColor blackColor];
        self.detailTextLabel.adjustsFontSizeToFitWidth = YES;
        self.detailTextLabel.minimumFontSize = 12;

    }
    return self;
}


-(void)addProgressBar{
    self.progressBarView = [[MCProgressBarView alloc]  initWithFrame:CGRectMake(320/2-100, 50, 200, 4)
                                                     backgroundImage:[[UIImage imageNamed:@"progress-bar-background"] resizableImageWithCapInsets:UIEdgeInsetsMake(0, 3, 0, 3)]
                                                     foregroundImage:[[UIImage imageNamed:@"progress-bar-foreground"] resizableImageWithCapInsets:UIEdgeInsetsMake(0, 3, 0, 3)]];
}

-(void)setProgress:(NSNumber *)progress{
    self.progressBarView.progress = [progress floatValue];
}

- (void)setSelected:(BOOL)selected animated:(BOOL)animated
{
    [super setSelected:selected animated:animated];

    // Configure the view for the selected state
}

@end

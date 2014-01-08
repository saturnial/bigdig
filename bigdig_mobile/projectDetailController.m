//
//  projectDetailController.m
//  bigdig_mobile
//
//  Created by Dylan Keil on 1/4/14.
//  Copyright (c) 2014 Dylan Keil. All rights reserved.
//

#import <SDWebImage/UIImageView+WebCache.h>
#import "projectDetailController.h"

@interface projectDetailController ()

@end

@implementation projectDetailController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (void)viewDidLoad
{
    [super viewDidLoad];
    self.myMap.delegate = (id)self;
    [self.projectImage setImageWithURL:[NSURL URLWithString:@"http://brentwood.thefuntimesguide.com/images/blogs/new-brentwood-park-concord-road.jpg"] placeholderImage:[UIImage imageNamed:@"progress-bar-foreground"]];
	// Do any additional setup after loading the view.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)backPressed:(id)sender {
    NSLog(@"why no??");
    //[self.navigationController dismissViewControllerAnimated:YES completion:nil];
    [self.navigationController popToRootViewControllerAnimated:TRUE];
}

@end

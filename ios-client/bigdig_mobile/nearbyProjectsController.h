//
//  nearbyProjectsController.h
//  bigdig_mobile
//
//  Created by Dylan Keil on 1/4/14.
//  Copyright (c) 2014 Dylan Keil. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface nearbyProjectsController : UIViewController<UITableViewDelegate,UITableViewDataSource>{
}

@property (weak, nonatomic) IBOutlet UIButton *plusButton;
@property (weak, nonatomic) IBOutlet UITableView *projectTable;

@end

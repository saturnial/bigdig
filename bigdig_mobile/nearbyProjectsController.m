//
//  nearbyProjectsController.m
//  bigdig_mobile
//
//  Created by Dylan Keil on 1/4/14.
//  Copyright (c) 2014 Dylan Keil. All rights reserved.
//

#import "nearbyProjectsController.h"
#import "addProjectController.h"
#import <SDWebImage/UIImageView+WebCache.h>
#import "projectCell.h"

@interface nearbyProjectsController ()
@property (nonatomic,strong) NSMutableArray * nearbyProjectsArray;
@end

@implementation nearbyProjectsController

- (void)viewDidLoad
{

    [super viewDidLoad];
    self.projectTable.delegate = self;
    self.projectTable.dataSource = self;
    [self.view addSubview:self.projectTable];
    [self.view bringSubviewToFront:self.plusButton];
    
	// Do any additional setup after loading the view, typically from a nib.
}


- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section
{
    return 1;
    //return self.nearbyProjectsArray.count;
}


- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView
{
    return 1;
}

- (CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath
{
    return 80;
}


- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
    static NSString *CellIdentifier = @"Cell";
    
    projectCell *cell = [tableView dequeueReusableCellWithIdentifier:CellIdentifier];
    if (!cell) {
        cell = [[projectCell alloc] initWithStyle:UITableViewCellStyleSubtitle reuseIdentifier:CellIdentifier];
    }
    
    cell.text = [self.nearbyProjectsArray objectAtIndex:indexPath.row];
    
    return cell;
}

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath
{
    [self performSegueWithIdentifier:@"detail" sender:self];
}

-(void)fetchProjects{
    //connect to server
    //projects = response
    //self.project = prjects
    //refrsh table
}

-(void)viewDidAppear:(BOOL)animated{
    [self.projectTable reloadData];
}


- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)addProjectPressed:(id)sender {
    [self presentNewProjectPage];
}

- (void)presentNewProjectPage
{
    UIStoryboard *sb = [UIStoryboard storyboardWithName:@"Main" bundle:nil];
    
    addProjectController * newProject = [sb instantiateViewControllerWithIdentifier:@"addProject"];
    newProject.modalTransitionStyle = UIModalTransitionStyleCoverVertical;
    [self presentViewController:newProject animated:YES completion:nil];
    
}

@end

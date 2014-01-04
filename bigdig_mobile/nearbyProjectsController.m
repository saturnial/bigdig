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
    return 280;
}


- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
    projectCell *cell = nil;
    static NSString *CellIdentifier = @"Cell";
    cell = [tableView dequeueReusableCellWithIdentifier:CellIdentifier];
    if (!cell) {
        NSArray * nibObjects = [[NSBundle mainBundle] loadNibNamed:@"projectCell" owner:nil options: nil];
        
        for(id currentObject in nibObjects){
            if([currentObject isKindOfClass:[projectCell class]]){
                cell = (projectCell *) currentObject;
            }
        }
    }
    
    cell.title.text = @"New Parklet";
    cell.location.text = @"21 & Harrison";
    cell.description.text = @"sample description";
    cell.voteCount.text = @"16 of 20 Votes";
    [cell.projectImage setImageWithURL:[NSURL URLWithString:@"http://brentwood.thefuntimesguide.com/images/blogs/new-brentwood-park-concord-road.jpg"] placeholderImage:[UIImage imageNamed:@"progress-bar-foreground"]];
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

- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender
{
    /*UINavigationController *navController = [segue destinationViewController];
    addProjectController *detail = (addProjectController *)navController.topViewController;
    
    UIImagePickerController *picker = [[UIImagePickerController alloc] init];
    picker.delegate = (id)detail;
    picker.allowsEditing = YES;
    picker.sourceType = UIImagePickerControllerSourceTypeCamera;
    
    [self presentViewController:picker animated:NO completion:NULL];*/
}

- (void)presentNewProjectPage
{
    UIStoryboard *sb = [UIStoryboard storyboardWithName:@"Main" bundle:nil];
    
    addProjectController * newProject = [sb instantiateViewControllerWithIdentifier:@"addProject"];
    newProject.modalTransitionStyle = UIModalTransitionStyleCoverVertical;
    [self presentViewController:newProject animated:YES completion:nil];
    
}

@end

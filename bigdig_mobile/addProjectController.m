//
//  addProjectController.m
//  bigdig_mobile
//
//  Created by Dylan Keil on 1/4/14.
//  Copyright (c) 2014 Dylan Keil. All rights reserved.
//

#import "addProjectController.h"
#import "bigAppDelegate.h"

@interface addProjectController ()

@end

@implementation addProjectController

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
    
    if (![UIImagePickerController isSourceTypeAvailable:UIImagePickerControllerSourceTypeCamera]) {
        
        UIAlertView *myAlertView = [[UIAlertView alloc] initWithTitle:@"Error"
                                                              message:@"Device has no camera"
                                                             delegate:nil
                                                    cancelButtonTitle:@"OK"
                                                    otherButtonTitles: nil];
        
        [myAlertView show];
        
    }
    
    self.notesField.delegate = (id)self;
    self.myMap.delegate = (id)self;
    
    bigAppDelegate * delegate = (bigAppDelegate * )[[UIApplication sharedApplication]delegate];
    CLLocationCoordinate2D location = CLLocationCoordinate2DMake(delegate.lastLocation.coordinate.latitude,delegate.lastLocation.coordinate.longitude);
    
    MKPointAnnotation *point = [[MKPointAnnotation alloc] init];
    point.coordinate = location;
    [self.myMap addAnnotation:point];
    
    [self.myMap setCenterCoordinate:location zoomLevel:14 animated:FALSE];
    
    self.projectImage.image = [UIImage imageNamed:@"camerablank"];
    
    UIToolbar* numberToolbar = [[UIToolbar alloc]initWithFrame:CGRectMake(0, 0, 320, 50)];
    numberToolbar.barStyle = UIBarStyleBlackTranslucent;
    numberToolbar.items = [NSArray arrayWithObjects:
                           [[UIBarButtonItem alloc]initWithTitle:@"Cancel" style:UIBarButtonItemStyleBordered target:self action:@selector(cancelNumberPad)],
                           [[UIBarButtonItem alloc]initWithBarButtonSystemItem:UIBarButtonSystemItemFlexibleSpace target:nil action:nil],
                           [[UIBarButtonItem alloc]initWithTitle:@"Apply" style:UIBarButtonItemStyleDone target:self action:@selector(doneWithNumberPad)],
                           nil];
    [numberToolbar sizeToFit];
    self.keypadText.inputAccessoryView = numberToolbar;
    // Do any additional setup after loading the view.
}

-(void)viewDidAppear:(BOOL)animated{
    /*UIImagePickerController *picker = [[UIImagePickerController alloc] init];
    picker.delegate = (id)self;
    picker.allowsEditing = YES;
    picker.sourceType = UIImagePickerControllerSourceTypeCamera;
    
    [self presentViewController:picker animated:NO completion:NULL];*/
}



- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)takePhoto:(id)sender {
    UIActionSheet *actionSheet = [[UIActionSheet alloc] initWithTitle: nil
                                                             delegate: (id)self
                                                    cancelButtonTitle: @"Cancel"
                                               destructiveButtonTitle: nil
                                                    otherButtonTitles: @"Take a new photo", @"Choose from existing", nil];
    [actionSheet showInView:self.view];
 }


- (void)actionSheet:(UIActionSheet *)actionSheet clickedButtonAtIndex:(NSInteger)buttonIndex
{
    switch (buttonIndex) {
        case 0:
            [self takeNewPhotoFromCamera];
            break;
        case 1:
            [self choosePhotoFromExistingImages];
        default:
            break;
    }
}

-(void)takeNewPhotoFromCamera{
    UIImagePickerController *picker = [[UIImagePickerController alloc] init];
    picker.delegate = (id)self;
    picker.allowsEditing = YES;
    picker.sourceType = UIImagePickerControllerSourceTypeCamera;
    
    [self presentViewController:picker animated:YES completion:NULL];
}

-(void)choosePhotoFromExistingImages{
    UIImagePickerController *picker = [[UIImagePickerController alloc] init];
    picker.delegate = (id)self;
    picker.allowsEditing = YES;
    picker.sourceType = UIImagePickerControllerSourceTypePhotoLibrary;
    
    [self presentViewController:picker animated:YES completion:NULL];
}

-(void)cancelNumberPad{
    [self.keypadText resignFirstResponder];
    self.keypadText.text = @"";
    
    if ([self.keypadText.text isEqualToString:@""]) {
        self.votesBlankButton.hidden = FALSE;
    }else{
        self.votesBlankButton.hidden = TRUE;
    }

}

-(void)doneWithNumberPad{
    [self.keypadText resignFirstResponder];
    if ([self.keypadText.text isEqualToString:@""]) {
        self.votesBlankButton.hidden = FALSE;
    }else{
        self.votesBlankButton.hidden = TRUE;
    }
}


- (void)imagePickerController:(UIImagePickerController *)picker didFinishPickingMediaWithInfo:(NSDictionary *)info {
    
    UIImage *chosenImage = info[UIImagePickerControllerEditedImage];
    self.projectImage.image = chosenImage;
    
    [picker dismissViewControllerAnimated:YES completion:NULL];
    
}

- (void)imagePickerControllerDidCancel:(UIImagePickerController *)picker {
    
    [picker dismissViewControllerAnimated:YES completion:NULL];
    
}


- (IBAction)didBeginName:(id)sender {
    self.dottedLine.hidden = TRUE;
    
    if ([self.keypadText.text isEqualToString:@""]) {
        self.votesBlankButton.hidden = FALSE;
    }else{
        self.votesBlankButton.hidden = TRUE;
    }
    
    if([self.notesField.text isEqualToString:@""]){
        self.dottedLineDescription.hidden = FALSE;
    }else{
        self.dottedLineDescription.hidden = TRUE;
    }
}


- (IBAction)didEndOnExit:(id)sender {
    if([self.titleField.text isEqualToString:@""]){
        self.dottedLine.hidden = FALSE;
    }else{
        self.dottedLine.hidden = TRUE;
    }
    [self.titleField resignFirstResponder];
}

- (IBAction)cancelPressed:(id)sender {
    [self dismissViewControllerAnimated:TRUE completion:nil];
}


- (IBAction)didBegin:(id)sender {
     self.votesBlankButton.hidden = TRUE;
    
    if([self.titleField.text isEqualToString:@""]){
        self.dottedLine.hidden = FALSE;
    }else{
        self.dottedLine.hidden = TRUE;
    }
    
    if([self.notesField.text isEqualToString:@""]){
        self.dottedLineDescription.hidden = FALSE;
    }else{
        self.dottedLineDescription.hidden = TRUE;
    }
}

- (BOOL) textView: (UITextView*) textView
shouldChangeTextInRange: (NSRange) range
  replacementText: (NSString*) text
{
    NSLog(@"here...");
    if ([text isEqualToString:@"\n"]) {
        
        [self publishPressed:self];
        
        [textView resignFirstResponder];
        
        if([self.notesField.text isEqualToString:@""]){
            self.dottedLineDescription.hidden = FALSE;
        }else{
            self.dottedLineDescription.hidden = TRUE;
        }
        
        return NO;
    }
    return YES;
}

- (void)textViewDidBeginEditing:(UITextView *)textView{
    
    if([self.titleField.text isEqualToString:@""]){
        self.dottedLine.hidden = FALSE;
    }else{
        self.dottedLine.hidden = TRUE;
    }
    
    if ([self.keypadText.text isEqualToString:@""]) {
        self.votesBlankButton.hidden = FALSE;
    }else{
        self.votesBlankButton.hidden = TRUE;
    }
    
    self.dottedLineDescription.hidden = TRUE;
}

- (IBAction)publishPressed:(id)sender {
}



@end

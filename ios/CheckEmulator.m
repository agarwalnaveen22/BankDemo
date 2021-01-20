#import "CheckEmulator.h"
#import <React/RCTLog.h>

@implementation CheckEmulator

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(checkEmulator:(RCTResponseSenderBlock)callback)
{
  BOOL isSimulator = false;
  #if TARGET_IPHONE_SIMULATOR
  isSimulator = true;
  NSDictionary *result = @{@"result" : [NSNumber numberWithBool:isSimulator]};
  callback(@[result]);
  #else
  isSimulator = false;
  NSDictionary *result = @{@"result" : [NSNumber numberWithBool:isSimulator]};
  #endif
}

@end

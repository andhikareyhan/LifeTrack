import { memo } from "react";
import type { FC } from "react";

import resets from "../_resets.module.css";
import { FinishButton_Property1Default } from "./FinishButton_Property1Default/FinishButton_Property1Default";
import { LogOut_StateDefault } from "./LogOut_StateDefault/LogOut_StateDefault";
import { IconParkOutlineCautionIcon } from "./IconParkOutlineCautionIcon.js";
import classes from "./Overlay.module.css";

interface Props {
  className?: string;
  onClose: () => void;
}

export const Overlay: FC<Props> = memo(function Overlay({ onClose }) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.overlay}>
        <div className={classes.dialog}>
          {/* Icon */}
          <div className={classes.iconParkOutlineCaution}>
            <IconParkOutlineCautionIcon className={classes.icon} />
          </div>

          {/* Text */}
          <div className={classes.logOutFromVitalSigns}>
            Log out from VitalSigns
          </div>
          <div className={classes.areYouSureYouWouldLikeToLogOut}>
            Are you sure you would like to log out of your VitalSigns account?
          </div>

          {/* Button */}
          <FinishButton_Property1Default
            className={classes.finish}
            onClose={onClose}
          />
          <LogOut_StateDefault className={classes.logOut} />
        </div>
      </div>
    </div>
  );
});

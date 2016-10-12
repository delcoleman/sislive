namespace Common.Models
{
    using System;
    using System.Collections;
    using System.Collections.Generic;

    /// <summary>
    /// Represents a retrospective
    /// </summary>
    public interface IRetrospective
    {
        /// <summary>
        /// Gets the retrospective name
        /// </summary>
        string Name
        {
            get;
        }

        /// <summary>
        /// Gets the summmary of the retrospective
        /// </summary>
        string Summary
        {
            get;
        }

        /// <summary>
        /// Gets the date of the retrospective
        /// </summary>
        DateTime Date
        {
            get;
        }

        /// <summary>
        /// Gets the participants of the retrospective
        /// </summary>
        IEnumerable<IParticipant> Participants
        {
            get;
        }

        /// <summary>
        /// Gets the feedback items associated with the retrospective
        /// </summary>
        IEnumerable<IFeedbackItem> FeedbackItems
        {
            get;
        } 
    }
}

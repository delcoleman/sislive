namespace Web.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Http;
    using Common.Models;
    using Common.Services;
    using Models;
    using Services;

    public class RetrospectiveController : ApiController
    {
        private readonly IRetrospectiveService retrospectiveService;

        public RetrospectiveController(IRetrospectiveService retrospectiveService)
        {
            this.retrospectiveService = new RetrospectiveService();
        }
        public RetrospectiveController()
        {
            this.retrospectiveService = new RetrospectiveService();
        }

        /// <summary>
        /// Gets all the retrospectives
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IHttpActionResult GetRetrospectives()
        {
            IEnumerable<IRetrospective> retrospectives = this.retrospectiveService.GetRetrospectives();
            return Ok(this.MapRetrospectives(retrospectives));
        }

        [HttpGet]
        [Route("api/retrospective/date/{date}")]
        public IHttpActionResult GetRetrospectivesForDate(string date)
        {
            IEnumerable<IRetrospective> retrospectives = this.retrospectiveService.GetRetrospectives();
            return Ok(this.MapRetrospectives(retrospectives));
        }

        /// <summary>
        /// Called to add a retrospective
        /// </summary>
        /// <param name="retrospective">The retrospective to add</param>
        /// <returns>The status of the add</returns>
        [HttpPost]
        public IHttpActionResult AddRetrospective(Retrospective retrospective)
        {
            return Ok();
        }

        private IEnumerable<Retrospective> MapRetrospectives(IEnumerable<IRetrospective> retrospectives)
        {
            return retrospectives.Select(MapRetospective);
        }

        private Retrospective MapRetospective(IRetrospective retrospective)
        {
            return new Retrospective
            {
                Name = retrospective.Name,
                Date = retrospective.Date,
                Participants = retrospective.Participants.Select(participant => participant.Name),
                FeedbackItems = this.MapFeedbackItems(retrospective.FeedbackItems),
                Summary = retrospective.Summary
            };
        }

        private IEnumerable<FeedbackItem> MapFeedbackItems(IEnumerable<IFeedbackItem> feedbackItems)
        {
            return feedbackItems.Select(MapFeedbackItem);
        }

        private FeedbackItem MapFeedbackItem(IFeedbackItem feedbackItem)
        {
            return new FeedbackItem
            {
                Body = feedbackItem.Body,
                RaisedBy = feedbackItem.Provider == null ? "" : feedbackItem.Provider.Name,
                FeedbackType = this.MapFeedbackType(feedbackItem.FeedbackType)
            };
        }

        private string MapFeedbackType(FeedbackTypes feedbackType)
        {
            string result = String.Empty;

            switch (feedbackType)
            {
                case FeedbackTypes.Idea:
                    result = "Idea";
                    break;
                case FeedbackTypes.Negative:
                    result = "Negative";
                    break;
                case FeedbackTypes.Positive:
                    result = "Positive";
                    break;
                case FeedbackTypes.Praise:
                    result = "Praise";
                    break;
            }

            return result;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileGenerator
{
    class Item
    {
        public Item ()
        {
            mappedBonuses = new List<BaseBonus>();
        }
        public class Flags
        {
            public bool emblemizable { get; set; }
            public bool dyable { get; set; }
        }

        public class Bonus
        {
            public int? type { get; set; }
            public int value { get; set; }
            public int? id { get; set; }
        }

        public class TypeData
        {
            public double? dps { get; set; }
            public double? clamped_dps { get; set; }
            public double? speed { get; set; }
            public int? damage_type { get; set; }
            public int? base_quality { get; set; }
            public int? range { get; set; }
            public int? two_handed { get; set; }
            public int? left_handed { get; set; }
            public int? armor_factor { get; set; }
            public int? clamped_armor_factor { get; set; }
            public int? absorption { get; set; }
            public int? slot { get; set; }
        }

        public class Sources
        {
            public List<string> monsters { get; set; }
        }

        public class Requirements {
            public int? level_required { get; set; }
        }

        public int id { get; set; }
        public string name { get; set; }
        public int category { get; set; }
        public int realm { get; set; }
        public int icon { get; set; }
        public int material { get; set; }
        public int salvage_amount { get; set; }
        public bool artifact { get; set; }
        public int sell_value { get; set; }
        public Flags flags { get; set; }
        public List<Bonus> bonuses { get; set; }
        public List<BaseBonus> mappedBonuses { get; set; }
        public TypeData type_data { get; set; }
        public Sources sources { get; set; }
        public Requirements requirements { get; set; }
        public int? use_duration { get; set; }
        public int bonus_level { get; set; }
        public int? dye_type { get; set; }
        public string delve_text { get; set; }

    }
}
